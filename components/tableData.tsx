const TableData = ({ isEditable, handleChangeData, identity, value }: any) => {
  if (isEditable) {
    return (
      <td className=" inline">
        <div className="inline"><input
          className="px-2 py-2 w-full"
          type="number"
          onChange={(e) => handleChangeData(e)}
          name={identity}
          id={identity}
          value={value}
        /></div>
      </td>
    );
  } else {
    return <td className="px-2 py-2 border">...</td>;
  }
};

export default TableData;
