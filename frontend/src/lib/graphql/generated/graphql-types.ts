import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Continent = {
  __typename?: 'Continent';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String']['output'];
  continent?: Maybe<Continent>;
  emoji: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addContinent: Continent;
  addCountry: Country;
};


export type MutationAddContinentArgs = {
  data: NewContinentInput;
};


export type MutationAddCountryArgs = {
  data: NewCountryInput;
};

export type NewContinentInput = {
  name: Scalars['String']['input'];
};

export type NewCountryInput = {
  code: Scalars['String']['input'];
  continent?: InputMaybe<ObjectId>;
  emoji: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type ObjectId = {
  id: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  continents: Array<Continent>;
  countries: Array<Country>;
  country: Country;
};


export type QueryCountryArgs = {
  code: Scalars['String']['input'];
};

export type GetCountriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCountriesQuery = { __typename?: 'Query', countries: Array<{ __typename?: 'Country', id: number, code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', name: string } | null }> };

export type GetCountryByIdQueryVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type GetCountryByIdQuery = { __typename?: 'Query', country: { __typename?: 'Country', id: number, code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', name: string } | null } };

export type GetContinentQueryVariables = Exact<{ [key: string]: never; }>;


export type GetContinentQuery = { __typename?: 'Query', continents: Array<{ __typename?: 'Continent', id: number, name: string }> };

export type AddCountryMutationVariables = Exact<{
  data: NewCountryInput;
}>;


export type AddCountryMutation = { __typename?: 'Mutation', addCountry: { __typename?: 'Country', code: string, name: string, emoji: string, continent?: { __typename?: 'Continent', name: string } | null } };

export type AddContinentMutationVariables = Exact<{
  data: NewContinentInput;
}>;


export type AddContinentMutation = { __typename?: 'Mutation', addContinent: { __typename?: 'Continent', name: string } };


export const GetCountriesDocument = gql`
    query getCountries {
  countries {
    id
    code
    name
    emoji
    continent {
      name
    }
  }
}
    `;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
      }
export function useGetCountriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export function useGetCountriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountriesQuery, GetCountriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountriesQuery, GetCountriesQueryVariables>(GetCountriesDocument, options);
        }
export type GetCountriesQueryHookResult = ReturnType<typeof useGetCountriesQuery>;
export type GetCountriesLazyQueryHookResult = ReturnType<typeof useGetCountriesLazyQuery>;
export type GetCountriesSuspenseQueryHookResult = ReturnType<typeof useGetCountriesSuspenseQuery>;
export type GetCountriesQueryResult = Apollo.QueryResult<GetCountriesQuery, GetCountriesQueryVariables>;
export const GetCountryByIdDocument = gql`
    query GetCountryById($code: String!) {
  country(code: $code) {
    id
    code
    name
    emoji
    continent {
      name
    }
  }
}
    `;

/**
 * __useGetCountryByIdQuery__
 *
 * To run a query within a React component, call `useGetCountryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryByIdQuery({
 *   variables: {
 *      code: // value for 'code'
 *   },
 * });
 */
export function useGetCountryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCountryByIdQuery, GetCountryByIdQueryVariables> & ({ variables: GetCountryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryByIdQuery, GetCountryByIdQueryVariables>(GetCountryByIdDocument, options);
      }
export function useGetCountryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryByIdQuery, GetCountryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryByIdQuery, GetCountryByIdQueryVariables>(GetCountryByIdDocument, options);
        }
export function useGetCountryByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCountryByIdQuery, GetCountryByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCountryByIdQuery, GetCountryByIdQueryVariables>(GetCountryByIdDocument, options);
        }
export type GetCountryByIdQueryHookResult = ReturnType<typeof useGetCountryByIdQuery>;
export type GetCountryByIdLazyQueryHookResult = ReturnType<typeof useGetCountryByIdLazyQuery>;
export type GetCountryByIdSuspenseQueryHookResult = ReturnType<typeof useGetCountryByIdSuspenseQuery>;
export type GetCountryByIdQueryResult = Apollo.QueryResult<GetCountryByIdQuery, GetCountryByIdQueryVariables>;
export const GetContinentDocument = gql`
    query GetContinent {
  continents {
    id
    name
  }
}
    `;

/**
 * __useGetContinentQuery__
 *
 * To run a query within a React component, call `useGetContinentQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinentQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinentQuery(baseOptions?: Apollo.QueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
      }
export function useGetContinentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
        }
export function useGetContinentSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetContinentQuery, GetContinentQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetContinentQuery, GetContinentQueryVariables>(GetContinentDocument, options);
        }
export type GetContinentQueryHookResult = ReturnType<typeof useGetContinentQuery>;
export type GetContinentLazyQueryHookResult = ReturnType<typeof useGetContinentLazyQuery>;
export type GetContinentSuspenseQueryHookResult = ReturnType<typeof useGetContinentSuspenseQuery>;
export type GetContinentQueryResult = Apollo.QueryResult<GetContinentQuery, GetContinentQueryVariables>;
export const AddCountryDocument = gql`
    mutation AddCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    code
    name
    emoji
    continent {
      name
    }
  }
}
    `;
export type AddCountryMutationFn = Apollo.MutationFunction<AddCountryMutation, AddCountryMutationVariables>;

/**
 * __useAddCountryMutation__
 *
 * To run a mutation, you first call `useAddCountryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCountryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCountryMutation, { data, loading, error }] = useAddCountryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCountryMutation(baseOptions?: Apollo.MutationHookOptions<AddCountryMutation, AddCountryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCountryMutation, AddCountryMutationVariables>(AddCountryDocument, options);
      }
export type AddCountryMutationHookResult = ReturnType<typeof useAddCountryMutation>;
export type AddCountryMutationResult = Apollo.MutationResult<AddCountryMutation>;
export type AddCountryMutationOptions = Apollo.BaseMutationOptions<AddCountryMutation, AddCountryMutationVariables>;
export const AddContinentDocument = gql`
    mutation AddContinent($data: NewContinentInput!) {
  addContinent(data: $data) {
    name
  }
}
    `;
export type AddContinentMutationFn = Apollo.MutationFunction<AddContinentMutation, AddContinentMutationVariables>;

/**
 * __useAddContinentMutation__
 *
 * To run a mutation, you first call `useAddContinentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddContinentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addContinentMutation, { data, loading, error }] = useAddContinentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddContinentMutation(baseOptions?: Apollo.MutationHookOptions<AddContinentMutation, AddContinentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddContinentMutation, AddContinentMutationVariables>(AddContinentDocument, options);
      }
export type AddContinentMutationHookResult = ReturnType<typeof useAddContinentMutation>;
export type AddContinentMutationResult = Apollo.MutationResult<AddContinentMutation>;
export type AddContinentMutationOptions = Apollo.BaseMutationOptions<AddContinentMutation, AddContinentMutationVariables>;