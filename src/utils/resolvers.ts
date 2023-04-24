import { collection, addDoc, getDocs } from 'firebase/firestore'
import { ProjectInstance, projects } from './data'
import { db } from './database'

export const addProject = async (project: ProjectInstance) => {
  try {
    const docRef = await addDoc(collection(db, 'projects'), project)
    console.log('Document written with ID: ', docRef.id)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'))
  const result = querySnapshot.docs.map((doc) => {
    return doc.data() as ProjectInstance
  })
  return result
}
