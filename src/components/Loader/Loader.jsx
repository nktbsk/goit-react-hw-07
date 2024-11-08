import { Rings } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderOverlay}>
      <Rings
        visible={true}
        height="80"
        width="80"
        color="lightpink"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
