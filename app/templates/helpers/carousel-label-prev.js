export default function(val, status) {
  return status.data.first ? val - 1 : status.data.index - 1
}
