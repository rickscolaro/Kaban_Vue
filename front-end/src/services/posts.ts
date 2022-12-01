import useApi from '../composables/UseApi'

export default function postService() {
  const { list, post, update, remove, getById } = useApi('Formulario')

  return {
    list,
    post,
    update,
    remove,
    getById,
  }
}
