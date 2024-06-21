import {Skeleton} from "@mui/material";

export function SkeletonFilmCard() {
    return (
        <Skeleton
            sx={{bgcolor: 'grey.900', borderRadius: '15px'}}
            variant="rounded" animation="wave" width={261} height={350}/>
    );
}