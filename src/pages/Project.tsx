import React from "react";

export default ({ match }: any) => {
  return (
    <div>
      <h3>{match.params.projectId}</h3>
    </div>
  );
};
