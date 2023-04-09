import { useRouter } from 'next/router';

export default function User() {
  const router = useRouter();
  const { name } = router.query;

  if (!name) return <p>My page</p>;

  return <p>User {name}</p>;
}
