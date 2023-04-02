import { GetStaticPaths, GetStaticProps } from 'next';

interface Props {
  planet: { name: string };
}

export default function Item({ planet }: Props) {
  return (
    <div>
      <h2>{planet.name}</h2>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://swapi.dev/api/planets');
  const planets = await res.json();

  const paths = Array.from({ length: planets.count }, (_, i) => ({
    params: { id: String(i + 1) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const res = await fetch(`https://swapi.dev/api/planets/${params?.id}`);
  const planet = await res.json();

  return {
    props: { planet },
  };
};
