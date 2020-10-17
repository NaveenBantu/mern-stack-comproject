import React from "react";
import { Dropdown } from "semantic-ui-react";
import { DropdownProps } from "semantic-ui-react/dist/commonjs/modules/Dropdown/Dropdown";
import { DropdownItemProps } from "semantic-ui-react/dist/commonjs/modules/Dropdown/DropdownItem";

const limitOptions = [
  { key: "0", value: "15", text: "15" },
  { key: "1", value: "30", text: "30" },
  { key: "2", value: "50", text: "50" },
];

const ProjectPageSizeSelect = ({ limit, onChangeLimit }) => {
  const handleChangeLimit = (e, { value }) => {
    console.log("value of change ", value)
    onChangeLimit(value);
  };
  // console.log("limit value ",limit);
  return (
    <>
      Records per page: {" "}
      <Dropdown
        inline={true}
        options={limitOptions}
        defaultValue={limit}
        onChange={handleChangeLimit}
      />
    </>
  );
};

export default ProjectPageSizeSelect;
