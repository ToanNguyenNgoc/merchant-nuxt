export const stringAvt = (fullname: string | undefined) => {
  return `${fullname?.split(' ')[0][0]}${fullname?.split(' ')[1][0]}`
}