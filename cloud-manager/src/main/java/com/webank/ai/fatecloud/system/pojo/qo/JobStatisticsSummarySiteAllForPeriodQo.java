/*
 * Copyright 2020 The FATE Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.webank.ai.fatecloud.system.pojo.qo;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@EqualsAndHashCode
@ApiModel(value = "job summary qo bean for a period, site dimension")
public class JobStatisticsSummarySiteAllForPeriodQo implements Serializable {
    @NotNull(message = "begin date can't be null!")
    @ApiModelProperty(value = "begin date")
    private Date beginDate;

    @NotNull(message = "end date can't be null!")
    @ApiModelProperty(value = "end date")
    private Date endDate;

    @NotNull(message = "institutions can't be null!")
    @ApiModelProperty(value = "institutions name")
    private String institutions;

    @ApiModelProperty("pageSize")
    private Integer pageSize = 10;

    @ApiModelProperty("pageNum")
    private Integer pageNum = 1;
}
