import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Post() {
  const router = useRouter();
  const [state, setState] = useState(1);

  const { page } = router.query;

  const navigateToNextPage = () => {
    if (!page) return;
    router.push(`posts?page=${+page + 1}`, undefined, {
      shallow: true,
    });
  };

  useEffect(() => {
    if (!page) return;

    console.log(`page changed to ${page}`);
  }, [router.query.page]);

  return (
    <>
      <p>{page}번째 포스트입니다.</p>
      <button onClick={navigateToNextPage}>다음페이지로~</button>
      <button onClick={() => setState(state + 1)}>상태 변경</button>
      <p>유지되는 상태: {state}</p>
    </>
  );
}
