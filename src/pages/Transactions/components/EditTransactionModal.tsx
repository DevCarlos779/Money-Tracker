import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./NewTransactionModalStyles";
import { ArrowCircleDown, ArrowCircleUp, Pencil, X } from "phosphor-react";

import { Controller, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import {
  TransactionContext,
  type TransactionApi,
} from "../../../contexts/TransactionsContext";
import { EditButton, SelectCategory } from "./EditTransactionModalStyles";
import { toast } from "react-toastify";

interface EditTransactionModalProps {
  transaction: TransactionApi;
}

export function EditTransactionModal({
  transaction,
}: EditTransactionModalProps) {
  const [open, setOpen] = useState(false);
  const { editTransaction } = useContext(TransactionContext);

  const categories = {
    income: ["Salary", "Freelance", "Others"],
    outcome: ["Food", "Transport", "Leisure", "Others"],
  };

  const EditTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    customCategory: z.string(),
    type: z.enum(["income", "outcome"]),
  });

  type EditTransactionType = z.infer<typeof EditTransactionSchema>;

  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<EditTransactionType>({
    resolver: zodResolver(EditTransactionSchema),
    defaultValues: {
      description: transaction.description,
      price: transaction.amount,
      category: transaction.category ? transaction.category : "Other",
      customCategory: transaction.customCategory,
      type: transaction.type,
    },
  });

  const category = watch("category");

  async function handleEditTransaction(data: EditTransactionType) {
    const isIncomeCategory: boolean = categories.income.includes(data.category);
    const isIncomeType = data.type == "income";
    let idErrorToast;

    toast.dismiss(idErrorToast);

    if (isIncomeCategory != isIncomeType) {
      idErrorToast = toast.error("Category does not match transaction type!");

      return;
    }

    const updatedTransaction = {
      id: transaction.id,
      description: data.description,
      category: data.category,
      customCategory: data.customCategory,
      date: new Date().toString(),
      amount: data.price,
      type: data.type,
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
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />
 
            <input
              type="number"
              placeholder="Preço"
              required
              {...register("price", { valueAsNumber: true })}
            />

            <SelectCategory {...register("category")} required>
              <option value="">Select a category</option>
              <option value="Salary">Salary</option>
              <option value="Freelance">Freelance</option>
              <option value="Food">Food</option>
              <option value="Transport">Transport</option>
              <option value="Shopping">Shopping</option>
              <option value="Leisure">Leisure</option>
              <option value="Health">Health</option>
              <option value="Other">Other</option>
            </SelectCategory>

            {category == "Other" ? (
              <input
                type="text"
                placeholder="Category"
                required
                {...register("customCategory")}
              />
            ) : null}

            <Controller
              control={control}
              name="type"
              render={({ field }) => {
                return (
                  <TransactionType
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="outcome" value="outcome">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </TransactionType>
                );
              }}
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
