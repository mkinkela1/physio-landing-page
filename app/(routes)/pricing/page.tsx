import FramedTable from "@/app/(routes)/pricing/components/FramedTable";

const Pricing = () => {
  return (
    <div className="py-10 flex flex-col gap-10">
      <FramedTable
        heading="Masaža"
        rows={[
          {
            item: "Medicinska masaža",
            prices: [15, 18, null, 35],
          },
          {
            item: "Masaža u prostoru naručitelja",
            prices: [null, null, 40, 50],
          },
          {
            item: "Manualna limfna drenaža",
            prices: [null, null, 25, 35],
          },
          {
            item: "Sportska masaža",
            prices: [null, 25, 35, 45],
          },
          {
            item: "Anticelulitna masaža",
            prices: [null, 25, 30, null],
          },
        ]}
      />
      <FramedTable
        heading="Tretmani"
        rows={[
          {
            item: "Tretman tijela (peeling, body wrapping)",
            prices: [null, 20, null, null],
          },
          {
            item: "Tretman - terapijski",
            prices: [null, 20, 25, 40],
          },
          {
            item: "Elektrostimulacija",
            prices: [10, null, null, null],
          },
          { item: "Presoterapija", prices: [null, 20, 30, 40] },
        ]}
      />
      <FramedTable
        heading="Nutricionizam"
        rows={[
          {
            item: "Nutricionističko savjetovanje",
            prices: [null, null, null, 50],
          },
          {
            item: "Izrada nutricionističkog plana prehrane (1 dan)",
            planPrice: 10,
          },
          {
            item: "Izrada nutricionističkog plana prehrane (1 dan)",
            planPrice: 60,
          },
        ]}
      />
    </div>
  );
};

export default Pricing;
