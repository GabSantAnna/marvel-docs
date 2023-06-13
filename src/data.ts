import md5 from 'md5'
interface GetDataProps {
    path: string;
    id?: string;
    options?: string;
}

export async function getData ({ path, id, options }: GetDataProps) {
    const hash = md5(`1${process.env.PRIVATE_API_KEY}${process.env.NEXT_PUBLIC_APT_KEY}`)

    const apikey = `ts=1&apikey=${process.env.NEXT_PUBLIC_APT_KEY}&hash=${hash}`
    let url = `https://gateway.marvel.com:443/v1/public/${path}`

    if (!id && !options) {
        url+= '?'
    }

    url += id && options ? `/${id}?${options}&` : ''

    url += id ? `/${id}?` : '';

    url += options ? `?${options}&` : '';


  
    url += apikey

    try {
        const response = await fetch(url);
        const data = await response.json();
    
    console.log(data)
      } catch (error) {
        console.log(error)
      }


}