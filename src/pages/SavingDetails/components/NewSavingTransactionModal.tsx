import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  NewTransactionButton,
  Overlay,
} from "./NewSavingTransactionModalStyles";
import { X } from "phosphor-react";

import { useForm } from "react-hook-form";
import { useContext } from "react";
import {
  TransactionContext,
  type Transaction,
} from "../../../contexts/TransactionsContext";
import { type SavingApi } from "../../../contexts/SavingsContext";

interface NewSavingTransactionModalProps {
  saving: SavingApi;
}

export function NewSavingTransactionModal({
  saving,
}: NewSavingTransactionModalProps) {
  const { createNewTransaction, transactions } = useContext(TransactionContext);

  const filteredTransactions = transactions.filter(
    (t) => t.description === (saving?.description ?? ""),
  );
  const actualValue = filteredTransactions.reduce((acc, t) => {
    return acc + t.amount;
  }, 0);

  const NewTransactionSchema = z.object({
    price: z.number(),
  });

  type NewTransactionType = z.infer<typeof NewTransactionSchema>;

  const {
    register,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewTransactionType>({
    resolver: zodResolver(NewTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionType) {
    const transaction: Transaction = {
      description: saving.description,
      category: "Saving",
      customCategory: "",
      date: new Date().toString(),
      amount:
        data.price + actualValue > saving.meta
          ? saving.meta - actualValue
          : data.price,
      type: "outcome",
    };

    await createNewTransaction(transaction);

    toast.success("Transaction created successfully!");
    reset();
  }

  return (
    <Dialog.Root
      onOpenChange={(open) => {
        if (!open) {
          reset();
        }
      }}
    >
      <Dialog.Trigger asChild>
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Nova Transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <button type="submit" disabled={isSubmitting}>
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
