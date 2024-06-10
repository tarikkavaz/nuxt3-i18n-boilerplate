export const useHeaderData = () => {
  const headerData = useState("headerData", () => ({
    image: "",
    title: "",
    paragraph: "",
  }));

  return {
    headerData,
  };
};
