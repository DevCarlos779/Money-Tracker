import { useContext, useEffect, useState } from "react";
import { SavingsContext, type SavingApi } from "../../contexts/SavingsContext";
import { useParams } from "react-router-dom";

export function SavingDetails() {
  const { getSavingDetails } = useContext(SavingsContext);
  const [saving, setSaving] = useState<SavingApi | undefined>(undefined);
  const { id } = useParams();

  async function getSaving() {
    if (id) {
      const data = await getSavingDetails(id);
      setSaving(data);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSaving();
  }, [id]);

  if (!saving) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div>
      {saving ? (
        <h1>
          <h1>{saving.description}</h1>
          <p>
            {saving.actualValue} / {saving.meta}
          </p>
          <p>barra</p>
          <p>faltam {saving.meta - saving.actualValue} reais</p>
        </h1>
      ) : (
        <h1>Carregando...</h1>
      )}
    </div>
  );
}
