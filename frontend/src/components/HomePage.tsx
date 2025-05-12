import { Header } from "./Header";
import { CountryCard } from "./CountryCard";
import { useGetCountriesQuery } from "@/lib/graphql/generated/graphql-types";
import { AddCountry } from "./AddCountry";

export function HomePage() {
  const { data, loading, error } = useGetCountriesQuery();

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Something wrong...</p>;

  return (
    <>
      <Header />
      <AddCountry />
      <section className="grid grid-cols-3 md:grid-cols-5 gap-2 p-2">
        {data?.countries.map((country) => (
          <CountryCard key={country.id} {...country} />
        ))}
      </section>
    </>
  );
}
