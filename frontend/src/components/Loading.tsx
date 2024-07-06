import ReactLoading from "react-loading";
export default function Loading() {
  return (
    <div className="loader-box">
      <ReactLoading type="bars" color="white" width={120} height={120} />
    </div>
  );
}
