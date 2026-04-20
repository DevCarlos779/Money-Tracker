import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
} from "./NewSavingTransactionModalStyles";
import { Pencil, X } from "phosphor-react";

import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import {
  TransactionContext,
  type TransactionApi,
} from "../../../contexts/TransactionsContext";
import { EditButton } from "./EditSavingTransactionModalStyles";
import { toast } from "react-toastify";
import type { SavingApi } from "../../../contexts/SavingsContext";

interface EditTransactionModalProps {
  saving: SavingApi;
  transaction: TransactionApi;
}

export function EditSavingTransactionModal({
  saving,
  transaction,
}: EditTransactionModalProps) {
  const [open, setOpen] = useState(false);
  const { transactions } = useContext(TransactionContext);
  const { editTransaction } = useContext(TransactionContext);

  const EditTransactionSchema = z.object({
    price: z.number(),
  });

  type EditTransactionType = z.infer<typeof EditTransactionSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditTransactionType>({
    resolver: zodResolver(EditTransactionSchema),
    defaultValues: {
      price: transaction.amount,
    },
  });

  const filteredTransactions = transactions.filter(
    (t) => t.description === (saving?.description ?? ""),
  );
  const actualValue = filteredTransactions.reduce((acc, t) => {
    return acc + t.amount;
  }, 0);

  async function handleEditTransaction(data: EditTransactionType) {
    const updatedTransaction = {
      id: transaction.id,
      description: transaction.description,
      category: transaction.category,
      customCategory: transaction.customCategory,
      date: new Date().toString(),
      amount: data.price + actualValue > saving.meta ? saving.meta : data.price,
      type: transaction.type,
    };
    await editTransaction(updatedTransaction);

    toast.success("Transaction edited successfully!");

    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <EditButton>
          <Pencil size={24} />
        </EditButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Editar Transação</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleEditTransaction)}>
            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <button type="submit" disabled={isSubmitting}>
              Editar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
