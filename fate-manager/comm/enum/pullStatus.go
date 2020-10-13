package enum

import "fate.manager/entity"

type PullStatusType int32

const (
	PULL_STATUS_UNKNOWN PullStatusType = -1
	PULL_STATUS_NO      PullStatusType = 0
	PULL_STATUS_YES     PullStatusType = 1
	PULL_STATUS_FAILED  PullStatusType = 2
	PULL_STATUS_PULLING PullStatusType = 3
)

func GetPullStatusString(p PullStatusType) string {
	switch p {
	case PULL_STATUS_NO:
		return "no pull"
	case PULL_STATUS_YES:
		return "pulled"
	case PULL_STATUS_FAILED:
		return "pull failed"
	case PULL_STATUS_PULLING:
		return "pulling"
	default:
		return "unknown"
	}
}

func GetPullStatusList() []entity.IdPair {
	var idPairList []entity.IdPair
	for i := 0; i < 4; i++ {
		idPair := entity.IdPair{i, GetPullStatusString(PullStatusType(i))}
		idPairList = append(idPairList, idPair)
	}
	return idPairList
}