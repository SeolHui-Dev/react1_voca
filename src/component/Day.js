import dummy from "../db/data.json";
import { useParams } from "react-router";

export default function Day() {
  const { day } = useParams();
  const wordList = dummy.words.filter((word) => word.day === day);

  return (
    <>
      <h1>Day {day}</h1>
      <table>
        <tbody>
          {wordList.map((word) => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
