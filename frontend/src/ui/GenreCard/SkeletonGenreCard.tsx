import {Skeleton} from "@mui/material";

export function SkeletonGenreCard() {
    return (
        <Skeleton
            sx={{bgcolor: 'grey.900', borderRadius: '15px'}}
            variant="rounded" animation="wave" width={300} height={300}/>
    )
}