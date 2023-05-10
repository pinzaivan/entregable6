export const formatDateDDMMYYYY = (oldformat)=>{
    const newDate = new Date(oldformat)
     const options = {
        year: "numeric",
        month:"numeric",
        day: "numeric"

    }
    return newDate.toLocaleDateString("es-Es",options)
}