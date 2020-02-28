import Link from "next/link";
import { connect } from "react-redux";

import Counter from "./counter";
import Clock from "./clock";

function Page({
  error,
  placeholderData,
  loading,

  lastUpdate,
  light,

  linkTo,
  NavigateTo,
  title,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}
const mapStateToProps = ({ timer, users }) => ({ ...timer, ...users });

export default connect(mapStateToProps)(Page);
