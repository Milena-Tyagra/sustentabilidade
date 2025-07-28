import { useState, useEffect } from "react";
import { Layout } from "./components/layout/Layout";
// import { LandingPage } from "./screens/LandingPage"
// import {
//   listUnits,
//   listPlans
// } from "./service/apis"

function App() {
  // const [loading, setLoading] = useState(false)
  // const [plans, setPlans] = useState()
  // const [units, setUnits] = useState()

  // const loadData = async () => {
  //   setLoading(true)
  //   try {
  //     const { rows: unitsData } = await listUnits()
  //     const { rows: plansData} = await listPlans()
  //     setPlans(plansData)
  //     setUnits(unitsData)
  //   } catch (err) {
  //     console.log(err)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   loadData()
  // }, [])

  return (
    <Layout>
      <h1 className="font-sans text-primary-100">SUSTENTABILIDADE</h1>
      <p className="font-script text-primary-200">fibra de bananeira</p>
      <div className="bg-background p-4">Conteúdo</div>
    </Layout>
  );
}

export default App;
