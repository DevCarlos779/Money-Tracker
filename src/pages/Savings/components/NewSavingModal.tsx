import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";

import {
  CloseButton,
  Content,
  NewSavingButton,
  Overlay,
} from "./NewSavingModalStyles";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { SavingsContext } from "../../../contexts/SavingsContext";

export function NewSavingModal() {
  const { createNewSaving } = useContext(SavingsContext);

  const NewSavingSchema = z.object({
    description: z.string(),
    meta: z.number(),
  });

  type NewSavingType = z.infer<typeof NewSavingSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewSavingType>({
    resolver: zodResolver(NewSavingSchema),
  });

  async function handleCreateNewSaving(data: NewSavingType) {
    const newSavingData = {
      description: data.description,
      actualValue: 0,
      meta: data.meta,
      deposits: [],
    };

    await createNewSaving(newSavingData);

    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <NewSavingButton>Create New Saving</NewSavingButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>New Saving</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleCreateNewSaving)}>
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
              {...register("meta", { valueAsNumber: true })}
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
