
export const gfgDataFetcher=async ()=>{
    const response=await fetch("https://practiceapi.geeksforgeeks.org/api/v1/problems-of-day/problem/today/")
    const resdata=await response.json();
    // console.log(resdata);

    console.log(resdata.problem_url)
    console.log(resdata.problem_name)
    console.log(resdata.difficulty)

    return (
        {
            link: resdata.problem_url,
            title: resdata.problem_name,
            difficulty: resdata.difficulty
        }
    )
}