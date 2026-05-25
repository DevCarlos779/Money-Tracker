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
import { useContext, useState } from "react";
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
  const [open, setOpen] = useState(false);

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
    if (actualValue >= saving.meta) {
      toast.error("This saving is already complete.!");
      reset();
      setOpen(false);
      return;
    }

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
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <NewTransactionButton>New Transaction</NewTransactionButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>New Transaction</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <input
              type="number"
              placeholder="Price"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <button type="submit" disabled={isSubmitting}>
              Register
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
