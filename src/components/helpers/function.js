export const getYYMMDD = (value) => {
    if (value) {
        var today = new Date(value);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();
        today = yyyy + "-" + mm + "-" + dd;
        return today;
    }
    return "";
};