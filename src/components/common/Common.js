export const getListCommonCd = ({ groupCodes }) => {
  return {
    //a: [{ label: 'aLabel', value: 'aValue' }],
    //b: [{ label: 'bLabel', value: 'bValue' }],
    //c: [{ label: 'cLabel', value: 'cValue' }],
    //e: [{ label: 'eLabel', value: 'eValue' }],
    //f: [{ label: 'fLabel', value: 'fValue' }],
    //g: [{ label: 'gLabel', value: 'gValue' }],
    //h: [{ label: 'hLabel', value: 'hValue' }],
    //i: [{ label: 'iLabel', value: 'iValue' }],
    //j: [{ label: 'jLabel', value: 'jValue' }],
    //k: [{ label: 'jLabel', value: 'jValue' }],
    //l: [{ label: 'jLabel', value: 'jValue' }],
    //m: [{ label: 'jLabel', value: 'jValue' }],
  };
};

export const addRow = (arr, setArr, colums) => {
  let arrKeys = colums
    .map((item) => [item.dataIndex, null])
    .filter((arr) => arr[0]);
  arrKeys.unshift(['key', arr.length]);
  const newOjt = Object.fromEntries(arrKeys);
  setArr((prev) => {
    for (let i = 0; i < arr.length; i++) {
      prev[i]['key'] = i;
    }
    return [...prev, newOjt];
  });
};

export const ojtChange = (value, key, setOjt) => {
  setOjt((prev) => ({
    ...prev,
    [key]: value,
  }));
};

export const arrChange = (value, column, index, setArr) => {
  setArr((prev) => {
    prev[index][column] = value;
    return [...prev];
  });
};
