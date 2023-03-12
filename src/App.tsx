import useSWR from 'swr'
import axios from './lib/axios';

const App = () => {
  const { data, error } = useSWR('/api/hello', () =>
    axios
      .get('/api/hello')
      .then((res: any) => res.data)
  )

  console.log(error)

  if (error) return <div>エラーが発生しました</div>
  if (!data) return <div>読み込み中</div>
  return (
    <div>
      <h1>ようこそ</h1>
      <p>{data}</p>
    </div>
  )
}

export default App;
