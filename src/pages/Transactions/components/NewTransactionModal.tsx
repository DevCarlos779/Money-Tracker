import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  NewTransactionButton,
  Overlay,
  SelectCategory,
  TransactionType,
  TransactionTypeButton,
} from "./NewTransactionModalStyles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionContext } from "../../../contexts/TransactionsContext";

export function NewTransactionModal() {
  const { createNewTransaction } = useContext(TransactionContext);
  const categories = {
    income: ["Salary", "Freelance", "Others"],
    outcome: ["Food", "Transport", "Leisure", "Others"],
  };

  const NewTransactionSchema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    customCategory: z.string(),
    type: z.enum(["income", "outcome"]),
  });

  type NewTransactionType = z.infer<typeof NewTransactionSchema>;

  const {
    control,
    register,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<NewTransactionType>({
    resolver: zodResolver(NewTransactionSchema),
    defaultValues: {
      type: "income",
      category: "",
      customCategory: "",
    },
  });

  const category = watch("category");

  async function handleCreateNewTransaction(data: NewTransactionType) {
    const isIncomeCategory: boolean = categories.income.includes(data.category);
    const isIncomeType = data.type == "income";
    let idErrorToast;

    toast.dismiss(idErrorToast);

    if (isIncomeCategory != isIncomeType) {
      idErrorToast = toast.error("Category does not match transaction type!");

      return;
    }
    const transaction = {
      description: data.description,
      category: data.category,
      customCategory: data.customCategory,
      date: new Date().toString(),
      amount: data.price,
      type: data.type,
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
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
