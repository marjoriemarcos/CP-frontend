import { useParams } from "react-router-dom";
import { useGetCountryByIdQuery } from "@/lib/graphql/generated/graphql-types";
import { Card } from "./ui/card";
import { Header } from "./Header";

export function CountryPage() {
  const { code } = useParams();
  const { data, loading, error } = useGetCountryByIdQuery({
    variables: { code: code || "" },
    skip: !code,
  });

  if (!code) return <p>This data doesn't exist...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something wrong...</p>;

  return (
    <>
      <Header />
      <Card className="flex gap-1 overflow-hidden justify-center bg-gray-100">
        <p className="text-center">{data?.country?.emoji}</p>
        <h3 className="text-center">
          Name : {data?.country?.name} ({data?.country.code})
        </h3>
        <p className="text-center">
          Continent : {data?.country?.continent?.name}
        </p>
      </Card>
    </>
  );
}
