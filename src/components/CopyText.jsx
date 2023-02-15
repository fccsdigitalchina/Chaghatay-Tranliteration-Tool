import React, { useState } from "react";

function CopyText({ translate }) {
  //setVal(translate.toString());

  const word = translate.join("");

  return (
    <div>
      <form>
        <label>
          <textarea
            //rows={10}
            //cols={0}
            defaultValue={word}
            required
          />
        </label>
      </form>
    </div>
  );
}

export default CopyText;
