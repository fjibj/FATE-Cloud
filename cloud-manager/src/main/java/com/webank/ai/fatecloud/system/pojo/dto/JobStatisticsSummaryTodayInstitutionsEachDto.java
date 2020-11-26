package com.webank.ai.fatecloud.system.pojo.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@ApiModel(value = "job summary for today, institutions dimension")

public class JobStatisticsSummaryTodayInstitutionsEachDto implements Serializable {
    @ApiModelProperty(value = "institutions name")
    private String institutions;

    @ApiModelProperty(value = "total failed job count")
    private Integer failedJobCount;

    @ApiModelProperty(value = "total successful job count")
    private Integer successJobCount;

    @ApiModelProperty(value = "total running job count")
    private Integer runningJobCount;
}