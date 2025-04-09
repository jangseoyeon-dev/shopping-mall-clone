import React from "react";

function FooterBox(props) {
  const { title, content } = props;
  return (
    <div className="w-1/6">
      <p className="text-[15px] font-bold mb-15">{title}</p>
      <ul>
        {content.map((item) => (
          <li key={item} className="mb-5 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterBox;
