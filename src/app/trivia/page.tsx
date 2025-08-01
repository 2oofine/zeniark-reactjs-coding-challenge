import QuestionsCard from "@/components/molecules/questions/QuestionsCard";
import { QuestionsResponse } from "../api/questions/route";

const TriviasPage = async () => {
  const resp = await fetch("http://localhost:3000/api/questions");
  const data: QuestionsResponse = await resp.json();

  return <QuestionsCard questions={data} />;
};

export default TriviasPage;
