package app

import (
	"fate.manager/entity"
)

type CheckSystemResp struct {
	CommResp
	Data []entity.Prepare `json:"data"`
}

type AnsibleListResponse struct {
	CommResp
	Data []entity.AnsibleListItem `json:"data"`
}

type AnsiblePackageResponse struct {
	CommResp
	Data entity.AnsibleCommResp `json:"data"`
}