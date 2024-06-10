import { useQuery } from "@apollo/client";
import { GET_RADICALS_BY_ID } from "@/app/graphql/radicals";

const RadicalDisplay = ({radicalData})  => {
  const classicalRadical = radicalData.filter((radical) => radical.radType === "classical");
  const classicalCode = Number(classicalRadical[0].code);

  const { loading, error, data } = useQuery(GET_RADICALS_BY_ID, {
    variables: {
      "getRadicalByIdId": classicalCode,
    },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;


   const {literal, meaningES} = data?.getRadicalById;
   console.log(literal);
  return (
    <p>
      <b>Radical: </b>
      <span lang="ja">{literal}</span> ({meaningES})
    </p>
  )
};

export default RadicalDisplay;
