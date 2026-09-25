import { useIncome } from "@/hooks/incomes/use-income";
import { useParams } from "react-router";

export default function Edit() {
  const { incomeId } = useParams();
  const { data, isSuccess } = useIncome(incomeId!);

  return (
    <div>
      Edit Income: {incomeId}
      {isSuccess && (
        <p>
          {data.amount} - {data?.note}
        </p>
      )}
    </div>
  );
}
