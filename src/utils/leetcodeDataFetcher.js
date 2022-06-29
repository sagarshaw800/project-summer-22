export const leetcodeDataFetcher = async () => {
  const DAILY_CODING_CHALLENGE_QUERY = `
    query questionOfToday {
        activeDailyCodingChallengeQuestion {
            date
            userStatus
            link
            question {
                acRate
                difficulty
                freqBar
                frontendQuestionId: questionFrontendId
                isFavor
                paidOnly: isPaidOnly
                status
                title
                titleSlug
                hasVideoSolution
                hasSolution
                topicTags {
                    name
                    id
                    slug
                }
            }
        }
    }`;
    try{
        const res= await fetch("/graphql/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            },
            body: JSON.stringify({
                query: DAILY_CODING_CHALLENGE_QUERY,
                }),
            });

        const status=res.ok;
        // console.log(status);     
        const resdata=await res.json();
    
        console.log(resdata);
        return (
            {link: resdata.data.activeDailyCodingChallengeQuestion.link,
            title: resdata.data.activeDailyCodingChallengeQuestion.question.title,
            difficulty: resdata.data.activeDailyCodingChallengeQuestion.question.difficulty}
        )
    }catch(err){
        console.log(err);
    }

};
