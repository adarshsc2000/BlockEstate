import { useRouter } from "next/router";
export default function handler() {
  const router = useRouter();
  const { id } = router.query;

  return <div>post id : {id}</div>;
}
