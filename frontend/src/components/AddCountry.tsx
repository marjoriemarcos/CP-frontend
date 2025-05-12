import { FormProvider } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useAddCountryForm } from "@/hook/useAddCountryForm";
import { Button } from "./ui/button";
import {
  useAddCountryMutation,
  useGetContinentQuery,
} from "@/lib/graphql/generated/graphql-types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { AddCountrySchema } from "@/schema/addCountrySchema";
import { GET_COUNTRIES } from "@/lib/graphql/operations";

export function AddCountry() {
  const form = useAddCountryForm();
  const [addCountryMutation] = useAddCountryMutation({
    refetchQueries: [
      {
        query: GET_COUNTRIES,
      },
    ],
  });
  const { data: continentsData } = useGetContinentQuery();

  const onSubmit = async (values: AddCountrySchema) => {
    try {
      await addCountryMutation({
        variables: {
          data: {
            emoji: values.emoji,
            name: values.name,
            code: values.code,
            continent: { id: parseInt(values.continent) },
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="France" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input placeholder="FR" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emoji"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Emoji</FormLabel>
                <FormControl>
                  <Input placeholder="🇫🇷" type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="continent"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Continent</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a continent" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {continentsData?.continents.map((continent) => (
                      <SelectItem
                        key={continent.name}
                        value={`${continent.id}`}
                      >
                        {continent.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-24">
            Add Country
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
