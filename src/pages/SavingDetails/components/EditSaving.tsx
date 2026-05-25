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

import { toast } from "react-toastify";
import {
  SavingsContext,
  type SavingPostApi,
} from "../../../contexts/SavingsContext";
import { EditButton } from "./EditSavingStyles";

interface EditTransactionModalProps {
  saving: SavingPostApi;
  actualValue: number;
  getSaving: () => void;
}

export function EditSavingModal({
  saving,
  actualValue,
  getSaving,
}: EditTransactionModalProps) {
  const [open, setOpen] = useState(false);
  const { editSaving } = useContext(SavingsContext);

  const EditTransactionSchema = z.object({
    description: z.string(),
    meta: z.number(),
  });

  type EditTransactionType = z.infer<typeof EditTransactionSchema>;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<EditTransactionType>({
    resolver: zodResolver(EditTransactionSchema),
    defaultValues: {
      description: saving.description,
      meta: saving.meta,
    },
  });

  async function handleEditSaving(data: EditTransactionType) {
    if (actualValue <= data.meta) {
      const updatedTransaction = {
        id: saving.id,
        description: data.description,
        actualValue: actualValue,
        meta: data.meta,
        deposits: saving.deposits,
      };

      await editSaving(updatedTransaction);
      await getSaving();

      toast.success("Saving edited successfully!");
      setOpen(false);
    } else {
      toast.error(
        "The new saving goal cannot be lower than the amount already saved.",
      );
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <EditButton>
          <Pencil size={24} />
          Edit
        </EditButton>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title>Edit Saving</Dialog.Title>

          <CloseButton>
            <X size={24} />
          </CloseButton>

          <form onSubmit={handleSubmit(handleEditSaving)}>
            <input
              type="text"
              placeholder="Description"
              required
              {...register("description")}
            />
            <input
              type="number"
              placeholder="Meta"
              required
              {...register("meta", { valueAsNumber: true })}
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
