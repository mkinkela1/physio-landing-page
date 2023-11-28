type ITableRow =
  | {
      item: string;
      planPrice: number;
      prices?: never;
    }
  | {
      item: string;
      planPrice?: never;
      prices: Array<number | null>;
    };

type ITable = {
  heading: string;
  rows: ITableRow[];
};

const FramedTable = ({ heading, rows }: ITable) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white rounded-xl p-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-primary">
          <tr>
            <th scope="col" className="px-6 py-3">
              <h2 className="font-bold text-primary text-2xl md:text-4xl leading-tight mb-4">
                {heading}
              </h2>
            </th>
            <th scope="col" className="px-6 py-3">
              20 min.
            </th>
            <th scope="col" className="px-6 py-3">
              30 min.
            </th>
            <th scope="col" className="px-6 py-3">
              45 min.
            </th>
            <th scope="col" className="px-6 py-3">
              60 min.
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ item, prices, planPrice }) => (
            <tr key={item} className="bg-white border-b hover:bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item}
              </th>
              {prices?.map((price) => (
                <td key={`${item}-${price}`} className="px-6 py-4">
                  {price ? `${price} €` : null}
                </td>
              ))}
              {planPrice && (
                <td
                  key={`${item}-plan`}
                  className="px-6 py-4 text-center"
                  colSpan={4}
                >
                  {planPrice} € (izrada plana)
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FramedTable;
