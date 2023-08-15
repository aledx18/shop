export function obtenerFechaHoraActual() {
  const fechaActual = new Date()

  const anio = fechaActual.getFullYear()
  const mes = String(fechaActual.getMonth() + 1).padStart(2, '0')
  const dia = String(fechaActual.getDate()).padStart(2, '0')
  const horas = String(fechaActual.getHours()).padStart(2, '0')
  const minutos = String(fechaActual.getMinutes()).padStart(2, '0')
  const segundos = String(fechaActual.getSeconds()).padStart(2, '0')

  const cadenaFecha = `${anio}-${mes}-${dia}T${horas}:${minutos}:${segundos}`

  return cadenaFecha
}

export function generarSlug(nombre: string) {
  return nombre
    .toLowerCase() // Convertir a minúsculas
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .replace(/[^\w-]+/g, '') // Eliminar caracteres no alfanuméricos y no guiones
    .replace(/^-+/, '') // Eliminar guiones al comienzo
    .replace(/-+$/, '') // Eliminar guiones al final
}

export function validarFormatoFecha(fecha: string) {
  // Expresión regular para verificar el formato "YYYY-MM-DD"
  const regex = /^\d{4}-\d{2}-\d{2}$/

  return regex.test(fecha)
}
