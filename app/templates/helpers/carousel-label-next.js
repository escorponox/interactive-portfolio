export default function(val, status) {
  return status.data.last ? 0 : status.data.index + 1
}
