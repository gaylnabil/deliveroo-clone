export const truncate = (text: string) =>{
    return text.length > 30 ? `${text.substring(0, 30)}...` : text;
  }
  
export const USD = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });