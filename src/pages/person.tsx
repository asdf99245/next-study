import { GetServerSideProps } from 'next';

interface Props {
  person: { name: string };
}

export default function Person({ person }: Props) {
  return <div>{person.name}</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://swapi.dev/api/people/1');
  const person = await res.json();

  return {
    props: { person },
  };
};
