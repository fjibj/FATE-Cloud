package com.webank.ai.fatecloud.system.pojo.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
public class JobStatisticsOfSiteDimension implements Serializable {

    private String siteGuestName;

    private List<InstitutionsWithHostSite> institutionsWithHostSites;

}
